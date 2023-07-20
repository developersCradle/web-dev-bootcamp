import Property
 from "./Property";
export default function PropertyList({ properties }) 
{
    return (
      <div>
        {
        properties.map((p) => {
          return <Property {...p} key={p.id} />;
        })}
      </div>
    );
}