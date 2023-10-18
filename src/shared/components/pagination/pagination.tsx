import IconButton from '../iconButton/iconButton';

interface PaginationProps {
  currentPage: number;
  lastPage: number;
}

function Pagination({ currentPage, lastPage }: PaginationProps) {
  const getDisplayedPages = () => {
    const vals = [currentPage - 1, currentPage, currentPage + 1].filter(
      (item) => item >= 0 && item <= lastPage
    );

    const result: (number | string)[] = Array.from(vals);

    //номера страниц по определению отсортированы
    if (vals[0] > 1) {
      result.unshift('...');
    }

    if (vals[2] === lastPage) {
      return result;
    }

    if (vals[2] < lastPage) {
      result.push('...');
    }

    result.push(lastPage);

    return result;
  };

  const pageNumbers = getDisplayedPages();

  return (
    <div>
      <IconButton />
      <div>
        {pageNumbers.map((pageNumber, ind) => (
          <span key={`pag-page-${ind}`}>{pageNumber}</span>
        ))}
      </div>
      <IconButton />
    </div>
  );
}

export default Pagination;
