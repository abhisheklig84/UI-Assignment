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
import { useState } from "react";
import ArrowLineLeft from "../../assets/images/orderIcons/ArrowLineLeft";
import ArrowLineRight from "../../assets/images/orderIcons/ArrowLineRight";

const OrderList = () => {
  const { uiTheme } = useSelector((state) => state);
  const [tableData, setTableData] = useState(orderData);
  const [selectedOrder, setSelectedOrder] = useState([]);

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
          <div>
            <Add fill={uiTheme?.mode === "light" ? "#1C1C1C" : "white"} />
          </div>
          <div>
            <FunnelSimple
              fill={uiTheme?.mode === "light" ? "#1C1C1C" : "white"}
            />
          </div>
          <div>
            <ArrowsDownUp
              fill={uiTheme?.mode === "light" ? "#1C1C1C" : "white"}
            />
          </div>
        </div>
        <Input placeholder={"Search"} hideSearchIcon={true} />
      </div>

      <div
        className={`${styles.tableWrapper} ${
          uiTheme.mode === "light" ? styles.light : styles.dark
        }`}
      >
        <TableComponent columns={orderCol} data={tableData} className={""} />
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
          pageCount={5}
          onPageChange={(e) => ""}
          pageRangeDisplayed={5}
          containerClassName={`${styles.pagination} ${
            uiTheme?.mode === "light" ? styles.light : styles.dark
          }`}
          activeClassName={styles.selected}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          forcePage={0}
        />
      </>
    </div>
  );
};

export default OrderList;
