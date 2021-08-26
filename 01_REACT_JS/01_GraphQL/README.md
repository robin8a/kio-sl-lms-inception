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