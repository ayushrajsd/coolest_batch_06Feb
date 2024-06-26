import { Table, Button } from "antd";
import MovieForm from "./MovieForm";
import { ShowLoading, HideLoading } from "../../redux/loaderSlice";
import { getAllMovies } from "../../api/movie";
import { useDispatch } from "react-redux";
import moment from "moment";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import DeleteMovieModal from "./DeleteMovieModal";

function MovieList() {
  const FakeMovies = [
    {
      key: "1",
      poster: "Image1",
      name: "Inside Out 2",
      description: "Crazines inside your brain goes to the next level",
      duration: 120,
      genre: "Animation",
      language: "English",
      releaseDate: "2024-06-01",
    },
    {
      key: "2",
      poster: "Image2",
      name: "Anatomy of a fall",
      description: "thrilling murder suspense",
      duration: 120,
      genre: "Thriller",
      language: "English",
      releaseDate: "2024-06-01",
    },
  ];
  const tableHeading = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (text, data) => {
        return (
          <img
            width="75"
            height="115"
            style={{ objectFit: "cover" }}
            src={data.poster}
          />
        );
      },
    },
    {
      title: "Movie Name",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      render: (text) => {
        return `${text} Mins`;
      },
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      render: (text, data) => {
        return moment(data.releaseDate).format("MM-DD-YY");
      },
    },
    {
      title: "Action",
      render: (text, data) => {
        return (
          <div>
            <Button
              onClick={() => {
                setIsModalOpen(true);
                setSelectedMovie(data);
                setFormType("edit");
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => {
                setIsDeleteModalOpen(true);
                setSelectedMovie(data);
              }}
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movies, setMovies] = useState(FakeMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [formType, setFormType] = useState("add");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();

  const getData = async () => {
    dispatch(ShowLoading());
    const response = await getAllMovies();
    const allMovies = response.data;
    setMovies(
      allMovies.map(function (item) {
        return { ...item, key: `movie${item._id}` };
      })
    );
    dispatch(HideLoading());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-end">
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setFormType("add");
          }}
        >
          Add Movie
        </Button>
        <Table dataSource={movies} columns={tableHeading} />
        {isModalOpen && (
          <MovieForm
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            formType={formType}
            getData={getData}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        )}
        {isDeleteModalOpen && (
          <DeleteMovieModal
            isDeleteModalOpen={isDeleteModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            getData={getData}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        )}
      </div>
    </>
  );
}

export default MovieList;
