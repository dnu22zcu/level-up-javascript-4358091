// Write your code here

class Movie{
  constructor(Title, Director, Genre, ReleaseYear, Rating){
      this.Title = Title;
      this.Director = Director;
      this.Genre = Genre;
      this.ReleaseYear = ReleaseYear;
      this.Rating = Rating;

  }

  movieOverview(){
    return `${this.Title},a,${this.Genre} film directed
    by ${this.Director} was released in ${this.ReleaseYear}.
    It has a rating of ${this.Rating}`;
  }
  
}

const movie1 = Movie("Barbie", "Greta Gertwig", "Comedy", 2023, 8.0);

movie1.movieOverview;