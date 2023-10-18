import { PageItem, PageItemsWrapper, PaginationWrapper } from './ui';
import IconButton from '../iconButton/iconButton';
import ArrowIcon from '@/assets/arrow.svg';

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onPageClick?: (pageNumber: number) => void;
}

function Pagination({ currentPage, lastPage, onPageClick }: PaginationProps) {
  const getDisplayedPages = () => {
    const vals = [currentPage - 1, currentPage, currentPage + 1].filter(
      (item) => item > 0 && item <= lastPage
    );

    const result: (number | string)[] = Array.from(vals);

    //номера страниц по определению отсортированы
    if (vals[0] > 1) {
      result.unshift('...');
    }

    if (vals[vals.length - 1] === lastPage) {
      return result;
    }

    if (vals[vals.length - 1] < lastPage) {
      result.push('...');
    }

    result.push(lastPage);

    return result;
  };

  const pageNumbers = getDisplayedPages();

  return (
    <PaginationWrapper>
      <IconButton icon={<ArrowIcon />} rotate="180deg" />
      <PageItemsWrapper>
        {pageNumbers.map((pageNumber, ind) => (
          <PageItem
            isActive={ind === currentPage - 1}
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
      </PageItemsWrapper>
      <IconButton icon={<ArrowIcon />} />
    </PaginationWrapper>
  );
}

export default Pagination;
