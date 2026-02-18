import express from 'express'

const app = express();

// importation de middelwar pour lire l objet json
app.use(express.json())

// diclaration de list
const users = [
    { id: 1, username: "saidou_7", email: 'saidouchrif16@gmail.com' },
    { id: 2, username: "anwarou_7", email: 'anwarouchrif16@gmail.com' },
    { id: 3, username: "Gopasse9", email: 'ouchrif16@gmail.com' },
    { id: 4, username: "tantan_9", email: 'ouchrif@gmail.com' },

]
// get recuperation de la list
app.get('/api/users', (req, res) => {
    res.send(users)
})
// post pour ajouter nouveau user
app.post('/api/users',(req,res)=>{
    const data=req.body;
    const id_user=users[users.length-1].id+1;
    const newuser={id:id_user,...data}
    users.push(newuser);
    res.send('le user a ete bien ajouter');
})
// delete pour supprimer un user
app.delete('/api/users/delete/:id',(req,res)=>{
    const id=req.params.id;
    users.splice(id,1)
    res.send('le user a ete bien supprimer')
})
/// run de server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})