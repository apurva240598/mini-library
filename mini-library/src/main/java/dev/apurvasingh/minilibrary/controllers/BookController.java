package dev.apurvasingh.minilibrary.controllers;

import dev.apurvasingh.minilibrary.models.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/books")
public class BookController {

    @GetMapping()
    public List<Book> getBook() {
        //TODO: Get all books implementation.
        return null;
    }
}
