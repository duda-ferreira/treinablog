import { BlogPost } from "@/data/@types/BlogPostInterface";

export default function useIndex() {
  const posts: BlogPost[] = [
    {
      id: "2",
      title: "Comandos do Git que você precisa conhecer",
      description: "Domine o git ao conhecer comandos e truques que facilitarão o seu trabalho",
      picture: "https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/07/29063506/git-1.png",
      slug: "comandos-git"
    },
    {
      id: "1",
      title: "10 truques de NPM - Voce conhece todos?",
      description: "Conheça simples truques que voce pode fazer com o NPM",
      picture: "https://dkrn4sk0rn31v.cloudfront.net/uploads/2019/04/23151507/TRUQUES-NPM.png",
      slug: "truques-npm"
    }
  ];
  return { posts };
}