type UserCardProps = {
    name: string;
    role: string;
}
export default function UserCard({name,role} : UserCardProps) {
    return(
        <div>
            <h1>{name}</h1>
            <p>{role}</p>
        </div>
    )
}