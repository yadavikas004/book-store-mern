import express from  'express';
import {Book} from '../models/bookModel.js';

const router = express.Router();

//Route for save a new Book
router.post('/create', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for Get All Books from database
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//Route for Get One Books from database by id
router.get('/details/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route for update a Book
router.put('/edit/:id', async (request, respose) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return respose.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return respose.status(404).json({ message: "Book not found" });
        }
        return respose.status(200).send({ message: "Book Updated successfully" })
    } catch (error) {
        console.error(error.message);
        respose.status(500).send({ message: error.message });
    }
});

//Route for Delete a Book
router.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }
        return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

export default router;