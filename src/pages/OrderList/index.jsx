import ReactPaginate from "react-paginate";
import Input from "../../components/Input";
import styles from "./orderList.module.scss";

const OrderList = () => {
  return (
    <div className={styles.orderListContainer}>
      <h2>Order List</h2>

      <div className="topSection">
        {" "}
        <Input placeholder={"Search"} hideSearchIcon={true} />
      </div>

      <>
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel={<span className="paginationBreak">...</span>}
          pageCount={10}
          onPageChange={(e) =>
            // // setSearchPaginationData({
            // //   ...searchPaginationData,
            // //   page: e?.selected + 1,
            // })
            ""
          }
          pageRangeDisplayed={5}
          containerClassName={styles.pagination}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          forcePage={1}
        />
      </>
    </div>
  );
};

export default OrderList;
