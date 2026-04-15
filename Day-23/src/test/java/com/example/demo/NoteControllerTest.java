package com.example.demo;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.example.demo.Controller.NotesController;
import com.example.demo.entity.Note;
import com.example.demo.services.NotesService;

class NoteControllerTest {

    @InjectMocks
    NotesController notesController;
    @Mock
    NotesService notesService;
    @BeforeEach
    void init() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testGetNotes() {
        Iterable<Note> notes = new ArrayList<>();
        when(notesService.getNotes()).thenReturn(notes);
        Iterable<Note> result = notesController.getNotes();
        assertNotNull(result);
    }
    @Test
    void testCreateNote() {
        Note note = new Note();
        when(notesService.createNote(note)).thenReturn(note);
        Note result = notesController.setNote(note);
        assertNotNull(result);
        assertEquals(note, result);
    }
}