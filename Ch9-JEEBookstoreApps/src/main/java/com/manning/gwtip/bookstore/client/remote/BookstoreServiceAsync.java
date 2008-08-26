package com.manning.gwtip.bookstore.client.remote;

import com.google.gwt.user.client.rpc.AsyncCallback;

import com.manning.gwtip.bookstore.client.model.Author;
import com.manning.gwtip.bookstore.client.model.Book;
import com.manning.gwtip.bookstore.client.model.Review;


public interface BookstoreServiceAsync {
    public void createReview(int bookId, Review review, AsyncCallback callback);

    public void deleteBook(Book book, AsyncCallback callback);

    public void findAllBooks(AsyncCallback callback);

    public void findAllCategories(AsyncCallback callback);

    public void findAuthorsByName(String firstName, String lastName,
        AsyncCallback callback);

    public void findAllAuthors( AsyncCallback callback);
    
    public void findBookById(int bookId, AsyncCallback callback);

    public void findBooksByAuthor(int authorId, AsyncCallback callback);

    public void findBooksByCategory(String categoryName, AsyncCallback callback);

    public void storeAuthor(Author author, AsyncCallback callback);

    public void storeBook(Book book, AsyncCallback callback);
}
