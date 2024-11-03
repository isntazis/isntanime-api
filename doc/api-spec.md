# api-spec

There are some description of explanation about api spec.

## Create Anime Spec

First one is create anime spec api.

```sh
type CreateAnime = {
  title: string;
  description: string;
  image: string;
  author: { name: string, profession: string[] };
  studio: { name: string };
  genre: { name: string[] };
  original_run: string;
  episodes: number;
  rating: number;
}
```

```

```
