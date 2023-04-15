import { Link, Outlet } from "react-router-dom"

export const Root = () => {
  return (
    <div className="mx-3">
      <div className="text-center my-16 mx-auto w-fit">
        <h1 className="font-bold text-4xl">
          <Link to="/">Experimento Turnstile</Link>
        </h1>
      </div>
      <Outlet/>
    </div>
  )
}