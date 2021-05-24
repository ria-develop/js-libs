import {useEffect, useState} from 'react';
import axios, {Canceler} from 'axios';

interface IBook {
  title: string;
}

function useBookSearch(): any {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    return () => {
      setBooks([]);
    };
  }, [query]);

  useEffect(() => {
    let cancel: Canceler;
    setLoading(true);
    setError(false);

    axios({
      method: 'GET',
      url: 'https://openlibrary.org/search.json',
      params: {q: query, page: pageNumber},
      cancelToken: new axios.CancelToken((c) => (cancel = c))
    })
      .then((res) => {
        setBooks((prevBooks) => {
          return [...new Set([...prevBooks, ...res.data.docs.map((b: IBook) => b.title)])];
        });
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        }
        setError(true);
        setLoading(false);
      });
    return () => {
      cancel();
    };
  }, [query, pageNumber]);
  return {
    loading,
    error,
    books,
    hasMore,
    nextPage() {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    },
    search(q: string) {
      setQuery(q);
      setPageNumber(1);
    }
  };
}

export default useBookSearch;
