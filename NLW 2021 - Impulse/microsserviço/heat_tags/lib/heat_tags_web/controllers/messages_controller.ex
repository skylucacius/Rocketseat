defmodule HeatTagsWeb.MessagesController do
  use HeatTagsWeb, :controller

  def create(conn, params) do
    IO.inspect(params)

    # conn
    # |> text("recebi a requisição")

    text(conn, "recebi a requisição")
    
  end
end
