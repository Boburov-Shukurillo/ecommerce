// app/detail/[id]/page.tsx
type Props = {
    params: { id: string };
  };
  
  export default function DetailIdPage({ params }: Props) {
    return (
      <div>
        <h1>Detail sahifasi: {params.id}</h1>
      </div>
    );
  }
  