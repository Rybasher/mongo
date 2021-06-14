db.users.agregate([
    { $match: { name: "misha" } },
    { $group: { _id: "$name", age: { $sum: "$age" } } }
])