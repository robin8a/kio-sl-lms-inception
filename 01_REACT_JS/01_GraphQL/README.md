# Modelos entidad relación (ER)
A continuación de la  descripción general de las principales entidades y sus relaciones:

## User:
> Campos: id, name, dateOfBirth, isProfileUpdated, aboutMe, role, counterLikeMe, profileImage, srcProfileImageToDisplay, counterFollowing, entre otros.
> Relaciones: Tiene relaciones "hasMany" con otras entidades como Multimedias, Comments, Likes, Bookmarks, Followers, Moocs, Favorites, Notifications, Shares y MessageChats.

## Genre:
Campos: id, name, icon, iconToDisplay, isSelected, entre otros.
Relaciones: Tiene relaciones "hasMany" con las entidades Multimedia, Favorites y Moocs.

## Favorite:
Campos: id, userID, genreID.
Relaciones: Pertenece (belongsTo) a User y Genre.

## Multimedia:
Campos: id, title, multimediaURL, countLikes, countPlayed, format, isPlayable, description, isOnSearch, userID, genreID, moocListID, entre otros.
Relaciones: Pertenece (belongsTo) a User, Genre y MoocList, y tiene relaciones "hasMany" con Comments, Likes, Bookmarks, PreviewImages, Shares y Moocs.

## PreviewImages:
Campos: id, src, srcImageToDisplay, srcImageToDisplayIndex, order, multimediaID.
Relaciones: Pertenece (belongsTo) a Multimedia.

## Comment:
Campos: id, userID, multimediaID, isPinned, content, parentID, entre otros.
Relaciones: Pertenece (belongsTo) a User y Multimedia, y tiene una relación "hasMany" con Likes y Children (comentarios hijos).

## BookmarkMultimedia:
Campos: id, userID, multimediaID.
Relaciones: Pertenece (belongsTo) a User y Multimedia.

## LikeMultimedia:
Campos: id, userID, multimediaID.
Relaciones: Pertenece (belongsTo) a User y Multimedia, y tiene una relación "hasMany" con Notifications.

## LikeComment:
Campos: id, userID, commentID.
Relaciones: Pertenece (belongsTo) a User y Comment, y tiene una relación "hasMany" con Notifications.

## Follower:
Campos: id, userID, followerID.
Relaciones: Pertenece (belongsTo) a User y tiene una relación "hasMany" con Notifications.

## Share:
Campos: id, userID, multimediaID.
Relaciones: Pertenece (belongsTo) a User y Multimedia, y tiene una relación "hasMany" con Notifications.

## Notification:
Campos: id, notificactionType, userStartID, followerID, likeMultimediaID, likeCommentID, commentID, shareID, isArchived.
Relaciones: Pertenece (belongsTo) a User, Follower, LikeMultimedia, LikeComment, Comment y Share.

## Mooc:
Campos: id, name, description, isFree, cost, discount, userID, genreID.
Relaciones: Pertenece (belongsTo) a User y Genre, y tiene una relación "hasMany" con MoocLists.

## MoocList:
Campos: id, title, description, moocID, moolistParentID.
Relaciones: Pertenece (belongsTo) a Mooc y MoocList, y tiene una relación "hasMany" con MoocLists y Multimedias.

## MessageChat:
Campos: id, messageChat, deliverDate, userSenderID, userReceiverID.
Relaciones: Pertenece (belongsTo) a User como remitente y receptor.
Cada entidad tiene campos que representan atributos de esa entidad, y las relaciones "belongsTo" y "hasMany" definen cómo se relacionan las entidades entre sí.

\

```js
# MOOC
query MyQueryListMoocs {
  listMoocs {
    items {
      id
    }
  }
}

mutation MyMutationDeleteMooc {
  deleteMooc(input: {id: ""}) {
    id
  }
}

# MULTIMEDIAS
query MyQueryListMultimedias {
  listMultimedias {
    items {
      id
      title
    }
  }
}


mutation MyMutationDeleteMultimedia {
  deleteMultimedia(input: {id: "fd8b42c6-9e57-44c2-b4b1-e725a753b45a"}) {
    id
  }
}

# LIST_MOOCS
query MyQueryListMoocLists {
  listMoocLists {
    items {
      id
    }
  }
}


mutation MyMutationDeleteMoocList {
  deleteMoocList(input: {id: ""}) {
    id
  }
}

```