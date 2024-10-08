import React, { useEffect, useState } from 'react';
import styles from "../../Style/reusableTable.module.css";
import PrevButton from '../../assets/tableicons/chevron-left.svg'
import NextButton from '../../assets/tableicons/chevron-right.svg'

const ReusableTable = ({ columns, data, itemsPerPageOptions = [5, 10, 15], className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data, itemsPerPage]);

  const changePage = (x) => {
    setCurrentPage((prev) => {
      const newPage = Math.max(1, Math.min(totalPages, prev + x));
      return newPage;
    });
  };

  const changeItemsPerPage = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className={styles["table-container"]}>
        <table className={className}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col) => (
                  <td key={col.key}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles["pagination"]}>
        <div className={styles["prev-next"]}>
          <button onClick={() => changePage(-1)} className={styles["prev-button"]}> <img src={PrevButton} /> </button>
          <span className={styles["page-number"]}>{currentPage}</span> <span className={styles["slash"]}>/</span> <span className={styles["total-pages"]}>{totalPages}</span>
          <button onClick={() => changePage(1)} className={styles["next-button"]}> <img src={NextButton} /> </button>
        </div>
        <div className={styles["select-options"]}>
          <div className={styles["select-container"]}>
            <select value={itemsPerPage} onChange={changeItemsPerPage} className={styles["custom-select"]}>
              {itemsPerPageOptions.map((option) =>
                <option key={option} value={option}>
                  {option}
                </option>
              )}
            </select>
            <div className={styles["select-arrow"]}>&#9660;</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReusableTable;
