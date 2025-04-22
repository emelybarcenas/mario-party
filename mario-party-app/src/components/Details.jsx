import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function Details() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const characterImages = {
    Mario: "/mario.png",
    Luigi: "/luigi.png",
    Peach: "/peach.png",
    Bowser: "/bowser.png",
    Yoshi: "/yoshi.png",
    Toad: "/toad.png", 
  };

  useEffect(() => {
    const fetchCharacter = async () => {
      const { data, error } = await supabase
        .from("Characters")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching character:", error.message);
      } else {
        setCharacter(data);
      }
      setLoading(false);
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!character) return <p className="text-center mt-10">Character not found</p>;

  const imageSrc = characterImages[character.character_type];

  return (
    <div className="p-10 flex flex-col items-center gap-6">
      <img src={imageSrc} alt={character.character_type} className="w-64 h-64 object-contain" />
      <h1 className="text-2xl font-bold">Name: {character.name}</h1>
      <p className="text-xl">Character Type: {character.character_type}</p>

      <Link
        to={`/edit/${id}`}
        className="inline-block bg-blue-500 text-white font-semibold px-6 py-2 rounded mt-4"
      >
        Edit Character
      </Link>
    </div>
  );
}
