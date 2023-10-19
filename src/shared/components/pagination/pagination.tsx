import { PageItem } from './ui';
import Container from '../container/container';
import IconButton from '../iconButton/iconButton';
import ArrowIcon from '@/assets/arrow.svg';

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onPageClick?: (pageNumber: number) => void;
  onPrevPageClick?: () => void;
  onNextPageClick?: () => void;
}

function Pagination({
  currentPage,
  lastPage,
  onPageClick,
  onPrevPageClick,
  onNextPageClick,
}: PaginationProps) {
  const getDisplayedPages = () => {
    const setVals = new Set([1, currentPage - 1, currentPage, currentPage + 1, lastPage]);
    const vals = Array.from(setVals)
      .filter((item) => item > 0 && item <= lastPage)
      .sort();

    const result: (number | string)[] = [1];

    for (let i = 1; i < vals.length; i++) {
      if (i === vals.length) {
        result.push(vals[i]);
        break;
      }
      if (vals[i] - vals[i - 1] > 1) {
        result.push('...');
      }
      result.push(vals[i]);
    }

    return result;
  };

  const pageNumbers = getDisplayedPages();

  return (
    <Container display="flex" gap="16px" direction="row" alignItems="center">
      <IconButton onClick={onPrevPageClick} icon={<ArrowIcon />} rotate="180deg" />
      <Container display="flex" gap="8px" direction="row" alignItems="center">
        {pageNumbers.map((pageNumber, ind) => (
          <PageItem
            isActive={pageNumber === currentPage}
            isDots={pageNumber === '...'}
            key={`pag-page-${ind}`}
            //нужно сделать кастомный typeguard
            onClick={
              pageNumber !== '...' && onPageClick
                ? () => onPageClick(pageNumber as number)
                : undefined
            }
          >
            {pageNumber}
          </PageItem>
        ))}
      </Container>
      <IconButton onClick={onNextPageClick} icon={<ArrowIcon />} />
    </Container>
  );
}

export default Pagination;
