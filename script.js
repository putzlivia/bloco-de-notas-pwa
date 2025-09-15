// Seleciona elementos do DOM
const noteInput = document.getElementById('note-input');
const saveBtn = document.getElementById('save-note');
const notesContainer = document.getElementById('notes-container');

// Função para carregar notas do localStorage
function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notesContainer.innerHTML = '';

  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.classList.add('note');
    li.textContent = note;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteNote(index));

    li.appendChild(deleteBtn);
    notesContainer.appendChild(li);
  });
}

// Função para salvar nota
function saveNote() {
  const noteText = noteInput.value.trim();
  if (!noteText) return;

  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push(noteText);
  localStorage.setItem('notes', JSON.stringify(notes));

  noteInput.value = '';
  loadNotes();
}

// Função para deletar nota
function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  loadNotes();
}

// Eventos
saveBtn.addEventListener('click', saveNote);

// Carrega notas ao abrir a página
window.addEventListener('DOMContentLoaded', loadNotes);
