import Card from "./components/Card"
import UserCard from "./components/UserCard"

export default function Home() {
    const users = [
        {
            id: 1,
            name: "Fajar",
            role: "Admin",
        },
        {
            id: 2,
            name: "Budi",
            role: "User",
        },
        {
            id: 3,
            name: "Siti",
            role: "Editor",
        },
    ]

    return (
        <>
            {users.map(user => {
                return (
                    <Card key={user.id}>
                        <UserCard
                            name={user.name}
                            role={user.role}
                        />
                    </Card>
                )
            })}
        </>
    )
    
}