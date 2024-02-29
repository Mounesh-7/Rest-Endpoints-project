const express = require('express')
const app = express()

const questions = [
    {
        question: "how to install python",
        slug: "how-to-install-python",
        votes: 3,
        view: 10,
        tags: "python,pip,query"
    },

    {
        question: "how to install pip",
        slug: "how to-install-pip",
        votes: 10,
        view: 100,
        tags: "python,pip,query"
    },
    {
        question: "how to install query",
        slug: "how to-install-query",
        votes: 20,
        view: 1000,
        tags: "python,pip,query"
    }

]

const users = [
    {
        name: "Mounesh",
        followers: 100,
        location: "Kurnool"
    },
    {
        name: "Mounesh1",
        followers: 1000,
        location: "Kurnool"
    },
    {
        name: "Mounesh2",
        followers: 10000,
        location: "Hyd"
    }

]

const tags = [
    {
        name: "Jeshu",
        desc: "For questions about programming in ECMAScript",
        questions: 10
    },
    {
        name: "Jeshu1",
        desc: "For questions about programming in ECMAScript",
        questions: 20
    },
    {
        name: "Jeshu2",
        desc: "For questions about programming in ECMAScript",
        questions: 30
    }

]

const jobs = [
    companies = {
        name: "Jack Henry",
        location: "Charlotte",
        description: "According to Jack Henry,people have forgotten how personal banking was before society embraced digital world. ",
        tags: "javascript"
    },
    {
        name: "Mounesh",
        location: "Hyd",
        description: "According to Tech India,people have forgotten how personal banking was before society embraced digital world. ",
        tags: "React"
    },
    {
        name: "Henry",
        location: "Charlotte",
        description: "According to Jack Henry,people have forgotten how personal banking was before society embraced digital world. ",
        tags: "Node"
    }
]

app.get('/', (req, res) => {
    res.send("Home")
})

app.get('/questions', (req, res) => {
    res.send(questions)
})

app.get('/questions/:slug', (req, res) => {
    const slug = req.params.slug
    questions.map(obj => {
        if (obj.slug === slug) {
            res.send(obj)
        }
    })

})


app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/tags', (req, res) => {
    res.send(tags)
})

app.get('/jobs/companies', (req, res) => {
    res.send(jobs)
})


app.listen(3000, () => {
    console.log("Loading at 3000..")
})