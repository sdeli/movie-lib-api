## Description

Movie Library application

## Bootstrap the app

- As the first step create an ormconfig.json from the 'ormconfig.example.json' file and fill in the keys where you see the value 'example' written in the 'ormconfig.example.json'.
- After this you bootstrap the application the following way:

```bash
$ npm install

$ npm run migration:run

$ npm run start
# or
$ npm run start:dev
```

## Running the app

```bash
# dev:
$ npm run start
# prod:
$ npm run start:dev
```

## About the app

- This is the rest api for serve data for this front end [https://github.com/sdeli/movie-lib-web](https://github.com/sdeli/movie-lib-web)
- Framework is nestjs
- Entities are created with typerom (since the orm is typeorm)
- Datas sorce is a scrape on this [website](https://www.imdb.com/search/title/?genres=comedy&explore=title_type,genres&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=3396781f-d87f-4fac-8694-c56ce6f490fe&pf_rd_r=J0CAFY1ZJ510CZKQAYNG&pf_rd_s=center-1&pf_rd_t=15051&pf_rd_i=genre&ref_=ft_gnr_pr1_i_1)
- Database is in fourth normal form
- Most endpoints are created by typeorm crud
