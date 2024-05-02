export const ChatError = ({ error }: { error: string }) => {
  return <div className="rounded-md bg-destructive p-4">{error}</div>
}
