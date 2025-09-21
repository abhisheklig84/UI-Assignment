import ReactPaginate from "react-paginate";
import Input from "../../components/Input";
import styles from "./orderList.module.scss";
import TableComponent from "../../components/TableComponent";
import { orderData } from "../../constants/order";
import { useSelector } from "react-redux";
import Add from "../../assets/images/orderIcons/Add";
import FunnelSimple from "../../assets/images/orderIcons/FunnelSimple";
import Calendar from "../../assets/images/orderIcons/Calendar";
import ArrowsDownUp from "../../assets/images/orderIcons/ArrowsDownUp";
import TickCheckbox from "../../assets/images/orderIcons/TickCheckbox";
import UnTickCheckbox from "../../assets/images/orderIcons/UnTickCheckbox";
import { useMemo, useState } from "react";
import ArrowLineLeft from "../../assets/images/orderIcons/ArrowLineLeft";
import ArrowLineRight from "../../assets/images/orderIcons/ArrowLineRight";
import ProfilePictureOne from "../../assets/images/notificationSideBarIcons/3D05.png";

const OrderList = () => {
  const pageSize = 5;

  const { uiTheme } = useSelector((state) => state);
  const [tableData, setTableData] = useState(orderData);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("none");

  const filteredData = useMemo(() => {
    if (!searchTerm) return tableData;
    return tableData.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, tableData]);

  const pageCount = Math.ceil(filteredData.length / pageSize);

  const sortedData = useMemo(() => {
    let sorted = [...filteredData];

    if (sortType !== "none") {
      sorted.sort((a, b) => {
        const numA = parseInt(a.orderId.replace("#CM", ""), 10);
        const numB = parseInt(b.orderId.replace("#CM", ""), 10);
        return sortType === "asc" ? numA - numB : numB - numA;
      });
    }

    const start = currentPage * pageSize;
    const end = start + pageSize;
    return sorted.slice(start, end);
  }, [filteredData, sortType, currentPage]);

  const orderCol = [
    {
      accessorKey: "qw",
      header: (
        <div
          className={`${styles.orderIdContainer}  ${
            uiTheme.mode === "light" ? styles.light : styles.dark
          }`}
        >
          {selectedOrder?.length !== tableData?.length ? (
            <div
              onClick={() =>
                setSelectedOrder(tableData?.map((item) => item?.id))
              }
            >
              <UnTickCheckbox
                fill={uiTheme.mode === "light" ? "#1C1C1C" : "white"}
              />
            </div>
          ) : (
            <div onClick={() => setSelectedOrder([])}>
              <TickCheckbox
                fill={uiTheme.mode === "light" ? "#1C1C1C" : "white"}
              />
            </div>
          )}

          <p>Order ID</p>
        </div>
      ),
      sortType: "alphanumeric",
      cell: ({ row }) => {
        return (
          <div
            className={`${styles.checkBoxSection} ${
              uiTheme.mode === "light" ? styles.light : styles.dark
            }`}
          >
            {!selectedOrder?.includes?.(row?.original?.id) ? (
              <div
                onClick={() =>
                  setSelectedOrder([...selectedOrder, row?.original?.id])
                }
              >
                <UnTickCheckbox
                  fill={uiTheme.mode === "light" ? "#1C1C1C" : "white"}
                />
              </div>
            ) : (
              <div
                onClick={() =>
                  setSelectedOrder(
                    selectedOrder?.filter((item) => item !== row?.original?.id)
                  )
                }
              >
                <TickCheckbox
                  fill={uiTheme.mode === "light" ? "#1C1C1C" : "white"}
                />
              </div>
            )}
            <p>{row?.original?.orderId}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "user",
      header: "User",
      sortType: "alphanumeric",
      cell: ({ row }) => {
        return (
          <div
            className={`${styles.userColoumn} ${
              uiTheme.mode === "light" ? styles.light : styles.dark
            }`}
          >
            <img src={row?.original?.profile} alt={row?.original?.user} />
            <p>{row?.original?.user}</p>
          </div>
        );
      },
    },
    { accessorKey: "project", header: "Project", sortType: "time" },
    { accessorKey: "address", header: "Address", sortType: "time" },
    {
      accessorKey: "date",
      header: "Date",
      sortType: "time",
      cell: ({ row }) => {
        return (
          <div
            className={`${styles.userColoumn} ${styles.calendar} ${
              uiTheme.mode === "light" ? styles.light : styles.dark
            }`}
          >
            <div>
              <Calendar
                fill={uiTheme?.mode === "light" ? "#1C1C1C" : "white"}
              />
            </div>
            <p>{row?.original?.date}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      sortType: "time",
      cell: ({ row }) => {
        const status = row.original.status;

        return (
          <div
            className={`${styles.statusContainer} ${
              status === "In Progress"
                ? styles.progress
                : status === "Complete"
                ? styles.completed
                : status === "Pending"
                ? styles.pending
                : status === "Approved"
                ? styles.approved
                : styles.Rejected
            }`}
          >
            <div />
            <p>{status}</p>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.orderListContainer}>
      <h2 className={uiTheme.mode === "light" ? styles.light : styles.dark}>
        Order List
      </h2>

      <div
        className={`${styles.topSection} ${
          uiTheme.mode === "light" ? styles.light : styles.dark
        }`}
      >
        <div className={styles.leftSection}>
          <div
            onClick={() =>
              setTableData([
                ...tableData,
                {
                  id: tableData.length + 1,
                  orderId: "#CM9801",
                  user: "Natali Craig",
                  project: "Landing Page",
                  address: "Meadow Lane Oakland",
                  date: "Just now",
                  status: "In Progress",
                  profile: ProfilePictureOne,
                },
              ])
            }
          >
            <Add fill={uiTheme?.mode === "light" ? "#1C1C1C" : "white"} />
          </div>
          <div>
            <FunnelSimple
              fill={uiTheme?.mode === "light" ? "#1C1C1C" : "white"}
            />
          </div>
          <div
            onClick={() => {
              if (sortType === "none") {
                setSortType("asc");
              }
              if (sortType === "asc") {
                setSortType("des");
              }
              if (sortType === "des") {
                setSortType("none");
              }
            }}
          >
            <ArrowsDownUp
              fill={uiTheme?.mode === "light" ? "#1C1C1C" : "white"}
            />
          </div>
        </div>
        <Input
          placeholder={"Search"}
          hideSearchIcon={true}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(0);
          }}
        />
      </div>

      <div
        className={`${styles.tableWrapper} ${
          uiTheme.mode === "light" ? styles.light : styles.dark
        }`}
      >
        <TableComponent columns={orderCol} data={sortedData} className={""} />
      </div>

      <>
        <ReactPaginate
          previousLabel={
            <div className={styles.navigationButton}>
              <ArrowLineLeft
                fill={uiTheme?.mode === "light" ? "#1C1C1C" : "white"}
              />
            </div>
          }
          nextLabel={
            <div className={styles.navigationButton}>
              <ArrowLineRight
                fill={uiTheme?.mode === "light" ? "#1C1C1C" : "white"}
              />
            </div>
          }
          breakLabel={<span className="paginationBreak">..</span>}
          pageRangeDisplayed={5}
          containerClassName={`${styles.pagination} ${
            uiTheme?.mode === "light" ? styles.light : styles.dark
          }`}
          activeClassName={styles.selected}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          pageCount={pageCount}
          forcePage={currentPage}
        />
      </>
    </div>
  );
};

export default OrderList;
