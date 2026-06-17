type BoxProps = { children: React.ReactNode }

export default function Box({ children }: BoxProps) {
    return (
        <div className="border p-4 rounded">{ children }</div>
    )
}