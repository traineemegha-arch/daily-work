package com.example.demo.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Note;
import com.example.demo.repositories.NotesRepository;
import jakarta.validation.Valid;

@Service
public class NotesService {
@Autowired
NotesRepository notesRepository;
@Autowired
public Iterable <Note> getNotes(){
	return notesRepository.findAll();
}
public Note createNote( Note note) {
	return notesRepository.save(note);
	
}
}
