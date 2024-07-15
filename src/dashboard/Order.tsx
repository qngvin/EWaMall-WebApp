import React, { useEffect, useState } from "react";
import {
    Button,
    Layout,
    Space,
    Table,
    message,
    Select,
    Spin,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const { Header, Content } = Layout;
const { Option } = Select;

interface Order {
    id: number;
    orderCode: string;
    orderDate: string;
    totalCost: number; // Thêm trường totalCost
    status: {
        name: string;
    };
}

const Order = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(false);
    const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
    const [statusFilter, setStatusFilter] = useState<number | null>(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const response = await axios.get<Order[]>(
                "https://ewamallbe.onrender.com/api/DashBoard/GetListOrders"
            );
            // Transform response data to include totalCost and status.name
            const transformedOrders = response.data.map((order) => ({
                ...order,
                totalCost: order.totalCost,
                status: {
                    name: order.status.name,
                },
            }));
            setOrders(transformedOrders);
            setFilteredOrders(transformedOrders); // Initialize filtered orders with all orders
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
                // Optionally, update local state or fetch updated orders
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
                // Optionally, update local state or fetch updated orders
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
        if (value !== null) {
            const filtered = orders.filter((order) => order.id === statusOptions.find(opt => opt.id === value)?.id);
            setFilteredOrders(filtered);
        } else {
            setFilteredOrders(orders); // Reset to all orders
        }
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
            title: "Total Cost", // Thêm cột Total Cost
            dataIndex: "totalCost",
            key: "totalCost",
            render: (totalCost: number) => `₫${totalCost}`,
        },
        {
            title: "Status",
            dataIndex: "statusId",
            key: "status",
            width: 150,
            render: (status: number) => {
                const statusText = statusOptions.find((opt) => opt.id === status)?.name;
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
            onFilter: (value: any, record: Order) => record.status.name === value,
            filteredValue: statusFilter !== null ? [statusFilter] : null,
        },
        {
            title: "Actions",
            key: "actions",
            width: 200,
            render: (_, record: Order) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => handleApprove(record.id)}>
                        Approve
                    </Button>
                    <Button danger onClick={() => handleBan(record.id)}>
                        Ban
                    </Button>
                </Space>
            ),
        },
    ];

    const handleClearFilters = () => {
        setStatusFilter(null);
        setFilteredOrders(orders); // Reset to all orders
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
