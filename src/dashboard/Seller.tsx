import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Layout,
  Space,
  Table,
  Tooltip,
  theme,
} from "antd";
import { EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const { Header, Content } = Layout;
const { Search } = Input;

const Seller = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");

  useEffect(() => {
    fetchSellers();
  }, []);

  const fetchSellers = async () => {
    try {
      const response = await axios.get(
        "https://ewamallbe.onrender.com/api/DashBoard/GetListSellers"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching sellers:", error);
    }
  };

  const handleSearch = (
    selectedKeys: React.Key[],
    confirm: () => void,
    dataIndex: string
  ) => {
    confirm();
    setSearchText(selectedKeys[0].toString());
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: string,
    placeholder: string
  ): any => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: {
      setSelectedKeys: (keys: React.Key[]) => void;
      selectedKeys: React.Key[];
      confirm: () => void;
      clearFilters: () => void;
    }) => (
      <div style={{ padding: 8 }}>
        <Search
          placeholder={placeholder}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (!visible) {
        setSearchText("");
      }
    },
    render: (text: string) =>
      searchedColumn === dataIndex ? (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Shop Name",
      dataIndex: "shopName",
      key: "shopName",
      width: 200,
      ...getColumnSearchProps("shopName", "Search shop name"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 300,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 150,
    },
    {
      title: "Actions",
      key: "action",
      width: 100,
      render: (text: any, record: any) => (
        <Space size="middle">
          <a href={`/edit/${record.id}`}>
            <EditOutlined />
          </a>
          <a href={`/delete/${record.id}`}>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys as number[]);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleClearSelection = () => {
    setSelectedRowKeys([]);
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
        <p style={{ fontSize: 20 }}>Manager Seller</p>
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
        <div>
          <div style={{ marginBottom: 16 }}>
            <Button
              onClick={handleClearSelection}
              disabled={!selectedRowKeys.length}
            >
              Clear Selection
            </Button>
            <span style={{ marginLeft: 8 }}>
              {selectedRowKeys.length > 0
                ? `Selected ${selectedRowKeys.length} items`
                : ""}
            </span>
          </div>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            scroll={{ x: true, y: 400 }}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default Seller;
