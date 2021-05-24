import React, {useCallback, useRef} from 'react';

interface IDataView {
  books: string[];
  error: boolean;
  hasMore: boolean;
  loading: boolean;
  nextPage: () => void;
}

function DataView({books, error, hasMore, loading, nextPage}: IDataView): JSX.Element {
  const observerRef = useRef<IntersectionObserver>();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) {
        return;
      }
      let {current} = observerRef;
      if (current) {
        current.disconnect();
      }
      observerRef.current = current = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore) {
          nextPage();
        }
      });

      if (node && current) {
        current.observe(node);
      }
    },
    [loading, hasMore, nextPage]
  );

  return (
    <div className="data-view">
      {books.map((book, index, {length}) => {
        if (index + 1 === length) {
          return (
            <div className="cell" ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        }
        return (
          <div className="cell" key={book}>
            {book}
          </div>
        );
      })}
      {loading && <div className="cell">Loading...</div>}
      {error && <div className="cell">Error</div>}
    </div>
  );
}

export default DataView;
