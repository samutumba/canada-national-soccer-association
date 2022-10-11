export const PageTitle = ({ title, description }: { title: string, description: string }) => {
 return (<div className="flex flex-col m-2 gap-1">
  <h1 className="font-title text-4xl font-semibold">{ title }</h1>
  <p className="text-slate-500 text-sm">{ description }</p>
 </div>)
}