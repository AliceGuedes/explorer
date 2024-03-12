const { request, response } = require("express");
const knex = require("../database/knex");

class NotesController{
    async create(request, response){
        const { title, description, rating, tags } = request.body;
        const  user_id = request.user.id;

        const [note_id] = await knex("movieNotes").insert({
            title,
            description,
            rating,
            user_id
        });

        const tagsInsert = tags.map(name =>{
            return{
                note_id,
                name,
                user_id
            }
        });

        await knex("movieTagsNotes").insert(tagsInsert);

        response.json();
    }

    async show(request, response){
        const{id} = request.params;

        const note = await knex("movieNotes").where({id}).first();
        const tags = await knex("movieTagsNotes").where({note_id: id}).orderBy("name");

        return response.json({
            ...note,
        tags
    })
    
    }

    async delete(request, response){
        const { id } = request.params;

        await knex("movieNotes").where({ id }).delete();

        return response.json();
    }

    async index(request, response) {
        const { title, tags } = request.query;

        const user_id = request.user.id;
    
        let notes
    
        if (tags) {
          const filterTags = tags.split(',').map(tag => tag.trim())
    
          notes = await knex("movieTagsNotes")
            .select([
              "movieNotes.id",
              "movieNotes.title",
              "movieNotes.user_id",
            ])
            .where("movieNotes.user_id", user_id)
            .whereLike("movieNotes.title", `%${title}%`)
            .whereIn("name", filterTags)
            .innerJoin("movieNotes", "movieNotes.id", "movieTagsNotes.note_id")
            .orderBy("movieNotes.title")
            
        } else {
          notes = await knex("movieNotes")
          .where({ user_id })
          .whereLike("title", `%${title}%`)
          .orderBy("title")
        }
    
        const userTags = await knex("movieTagsNotes").where({ user_id })
        const notesWhithTags = notes.map(notes => {
          const noteTags = userTags.filter(tag => movieTagsNotes.note_id === movieNotes.id)
    
          return {
            ...note,
            tags: noteTags
          }
        })
    
        return response.json(notesWhithTags)
    }

}
module.exports = NotesController