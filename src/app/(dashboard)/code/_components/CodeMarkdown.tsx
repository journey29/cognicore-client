import ReactMarkdown from "react-markdown"

export const CodeMarkdown = ({ message }: { message: string }) => {
  return (
    <ReactMarkdown
      className="overflow-hidden text-sm leading-6"
      components={{
        pre: ({ node, ...props }) => (
          <div className="my-2 w-full overflow-auto rounded-md bg-primary p-3 text-black">
            <pre {...props} />
          </div>
        ),
        code: ({ node, ...props }) => (
          <code
            className="rounded-md bg-primary p-1 text-black"
            {...props}
          />
        )
      }}
    >
      {message}
    </ReactMarkdown>
  )
}
