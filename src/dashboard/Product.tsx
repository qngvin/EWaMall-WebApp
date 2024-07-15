import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Layout,
  Space,
  Table,
  theme,
  message,
  Select,
} from "antd";
import { EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const { Header, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

interface Product {
  id: number;
  productName: string;
  productDescription: string;
  minPrice: number;
  sellerName: string;
  totalQuantity: number;
  productStatus: number;
}

const Product = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [statusFilter, setStatusFilter] = useState<number | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Product[]>(
        "https://ewamallbe.onrender.com/api/Product/GetAllProducts"
      );
      setProducts(response.data);
      setFilteredProducts(response.data); // Initialize filtered products with all products
    } catch (error) {
      message.error("Failed to fetch products");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: number) => {
    message.info(`Editing product ${id}`);
    // Implement edit functionality here
  };

  const handleDelete = (id: number) => {
    message.info(`Deleting product ${id}`);
    // Implement delete functionality here
  };

  const handleApprove = async (id: number) => {
    try {
      const response = await axios.put(
        `https://ewamallbe.onrender.com/api/Product/UpdateProductStatus/${id}?status=1`
      );
      if (response.status === 200) {
        message.success(`Product ${id} approved successfully`);
        // Optionally, update local state or fetch updated products
        fetchProducts();
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
        // Optionally, update local state or fetch updated products
        fetchProducts();
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
      const filtered = products.filter((product) => product.productStatus === value);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Reset to all products
    }
  };

  const statusOptions = [
    { id: 1, name: "Còn hàng" },
    { id: 2, name: "Hết hàng" },
    { id: 3, name: "Chờ duyệt" },
    { id: 4, name: "Vi phạm" },
    { id: 5, name: "Đã ẩn" },
  ];

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      width: 200,
    },
    {
      title: "Description",
      dataIndex: "productDescription",
      key: "productDescription",
      width: 300,
    },
    {
      title: "Price",
      dataIndex: "minPrice",
      key: "minPrice",
      render: (text: number) => `₫${text}`,
    },
    {
      title: "Seller",
      dataIndex: "sellerName",
      key: "sellerName",
    },
    {
      title: "Total Quantity",
      dataIndex: "totalQuantity",
      key: "totalQuantity",
    },
    {
      title: "Status",
      dataIndex: "productStatus",
      key: "productStatus",
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
      onFilter: (value: any, record: Product) => record.productStatus === value,
      filteredValue: statusFilter !== null ? [statusFilter] : null,
    },
    {
      title: "Actions",
      key: "actions",
      width: 200,
      render: (_, record: Product) => (
        <Space size="middle">
          {record.productStatus === 3 && (
            <Button type="primary" onClick={() => handleApprove(record.id)}>
              Approve
            </Button>
          )}
          {(record.productStatus === 1 || record.productStatus === 2) && (
            <Button danger onClick={() => handleBan(record.id)}>
              Ban
            </Button>
          )}
        </Space>
      ),
    },
  ];

  const handleClearFilters = () => {
    setStatusFilter(null);
    setFilteredProducts(products); // Reset to all products
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0 5%",
          background: colorBgContainer,
        }}
      >
        <p style={{ fontSize: 20 }}>Manager Product</p>
      </Header>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <Button onClick={handleClearFilters}>Clear Filters</Button>
        </div>
        <Table
          columns={columns}
          dataSource={filteredProducts}
          rowKey="id"
          loading={loading}
          // scroll={{ x: true, y: 400 }}
        />
      </Content>
    </Layout>
  );
};

export default Product;
