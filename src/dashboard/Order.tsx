import React, { useEffect, useState } from "react";
import {
    Button,
    Layout,
    Space,
    Table,
    message,
    Select,
    Spin,
    Input,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const { Header, Content } = Layout;
const { Option } = Select;

interface Order {
    id: number;
    orderCode: string;
    orderDate: string;
    totalCost: number;
    status: {
        name: string;
    };
    seller: {
        shopName: string;
    };
}

const Order = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);
    const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
    const [statusFilter, setStatusFilter] = useState<number | null>(null);
    const [sellerFilter, setSellerFilter] = useState<string>("");

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const response = await axios.get<Order[]>(
                "https://ewamallbe.onrender.com/api/DashBoard/GetListOrders"
            );
            const transformedOrders = response.data.map((order) => ({
                ...order,
                totalCost: order.totalCost,
                status: {
                    name: order.status.name,
                },
                seller: {
                    shopName: order.seller.shopName,
                },
            }));
            setOrders(transformedOrders);
            setFilteredOrders(transformedOrders);
        } catch (error) {
            message.error("Failed to fetch orders");
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (id: number) => {
        try {
            const response = await axios.put(
                `https://ewamallbe.onrender.com/api/Product/UpdateProductStatus/${id}?status=1`
            );
            if (response.status === 200) {
                message.success(`Product ${id} approved successfully`);
                fetchOrders();
            } else {
                message.error(`Failed to approve product ${id}`);
            }
        } catch (error) {
            message.error(`Failed to approve product ${id}`);
            console.error("Error approving product:", error);
        }
    };

    const handleBan = async (id: number) => {
        try {
            const response = await axios.put(
                `https://ewamallbe.onrender.com/api/Product/UpdateProductStatus/${id}?status=4`
            );
            if (response.status === 200) {
                message.success(`Product ${id} banned successfully`);
                fetchOrders();
            } else {
                message.error(`Failed to ban product ${id}`);
            }
        } catch (error) {
            message.error(`Failed to ban product ${id}`);
            console.error("Error banning product:", error);
        }
    };

    const handleStatusFilterChange = (value: number | null) => {
        setStatusFilter(value);
        filterOrders(value, sellerFilter);
    };

    const handleSellerFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSellerFilter(value);
        filterOrders(statusFilter, value);
    };

    const filterOrders = (status: number | null, seller: string) => {
        let filtered = orders;
        if (status !== null) {
            filtered = filtered.filter((order) => order.status.name === statusOptions.find(opt => opt.id === status)?.name);
        }
        if (seller) {
            filtered = filtered.filter((order) => order.seller.shopName.toLowerCase().includes(seller.toLowerCase()));
        }
        setFilteredOrders(filtered);
    };

    const statusOptions = [
        { id: 1, name: 'Chờ xác nhận' },
        { id: 2, name: 'Chờ lấy hàng' },
        { id: 3, name: 'Đang giao' },
        { id: 4, name: 'Đã giao' },
        { id: 5, name: 'Đã hủy' },
        { id: 6, name: 'Trả hàng/Hoàn tiền' },
        { id: 8, name: 'Giao không thành công' },
    ];

    const columns = [
        {
            title: "Order Code",
            dataIndex: "orderCode",
            key: "orderCode",
            width: 150,
        },
        {
            title: "Order Date",
            dataIndex: "orderDate",
            key: "orderDate",
            width: 150,
            render: (orderDate: string) => new Date(orderDate).toLocaleDateString('en-GB'),
        },
        {
            title: "Total Cost",
            dataIndex: "totalCost",
            key: "totalCost",
            width: 200,
            render: (totalCost: number) => `₫${totalCost}`,
        },
        {
            title: "Seller",
            dataIndex: "seller",
            key: "seller",
            width: 200,
            render: (seller: { shopName: string }) => seller.shopName,
            filterDropdown: () => (
                <Input
                    placeholder="Search Seller"
                    value={sellerFilter}
                    onChange={handleSellerFilterChange}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
            ),
            filterIcon: (filtered: boolean) => (
                <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 150,
            render: (status: { name: string }) => {
                const statusText = statusOptions.find((opt) => opt.name === status.name)?.name;
                return <span>{statusText}</span>;
            },
            filterDropdown: () => (
                <Select
                    style={{ width: 120 }}
                    onChange={(value) => handleStatusFilterChange(value)}
                    allowClear
                >
                    {statusOptions.map((option) => (
                        <Option key={option.id} value={option.id}>
                            {option.name}
                        </Option>
                    ))}
                </Select>
            ),
            filterIcon: (filtered: boolean) => (
                <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
            ),
            filteredValue: statusFilter !== null ? [statusFilter] : null,
        },
        {
            title: "Actions",
            key: "actions",
            width: 200,
            // render: (_, record: Order) => (
            //     <Space size="middle">
            //         <Button type="primary" onClick={() => handleApprove(record.id)}>
            //             Approve
            //         </Button>
            //         <Button danger onClick={() => handleBan(record.id)}>
            //             Ban
            //         </Button>
            //     </Space>
            // ),
        },
    ];

    const handleClearFilters = () => {
        setStatusFilter(null);
        setSellerFilter("");
        setFilteredOrders(orders);
    };

    const getTotalCost = () => {
        return filteredOrders.reduce((total, order) => total + order.totalCost, 0);
    };

    return (
        <Layout>
            <Header
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0 5%",
                    background: "#f0f2f5",
                }}
            >
                <h2 style={{ margin: 0 }}>Order Management</h2>
            </Header>
            <Content
                style={{
                    margin: "24px 16px",
                    padding: 24,
                    minHeight: 280,
                    background: "#fff",
                    borderRadius: "5px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div style={{ marginBottom: 16 }}>
                    <Button onClick={handleClearFilters}>Clear Filters</Button>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <h3>Total Cost: ₫{getTotalCost()}</h3>
                </div>
                <Spin spinning={loading}>
                    <Table
                        columns={columns}
                        dataSource={filteredOrders}
                        rowKey="id"
                        // scroll={{ x: true, y: 400 }}
                    />
                </Spin>
            </Content>
        </Layout>
    );
};

export default Order;
