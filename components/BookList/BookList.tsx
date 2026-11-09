import { Book } from "@/types/book";
import css from "./BookList.module.css";

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  return (
    <ul className={css.bookList}>
      {books.map((book) => (
        <li key={book.id}>
          <p>{book.title}</p>
          <p>Author:{book.author}</p>
          <p>Description:{book.description}</p>
        </li>
      ))}
    </ul>
  );
}
