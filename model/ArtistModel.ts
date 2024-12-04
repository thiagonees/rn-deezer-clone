export type ArtistModel = {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: string;
  nb_fan?: number;
  nb_album?: number;
  share?: boolean;
  link?: boolean;
}