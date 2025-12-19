import Note from "../models/Notes.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Error fetching notes", error });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title: title, content: content });

    await newNote.save();
    res
      .status(201)
      .json({ message: "Note Created Successfully", note: newNote });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Error creating note", error });
  }
};

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, content });

    res.status(200).json({ message: "Note Updated Successfully" });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Error updating note", error });
  }
}

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "Note Deleted Successfully" });
};
