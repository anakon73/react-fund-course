import { getPagesArray } from "../../../utils/pages";

const MyPagination = ({ totalPages, page, changePage }) => {
  let pageArray = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
      {pageArray.map((p) => {
        return (
          <span
            key={p}
            onClick={() => changePage(p)}
            className={page === p ? "page page__current" : "page"}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default MyPagination;
