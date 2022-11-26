export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      // const prev = action.prev;
      // const current = action.current
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }

    case "added": {
      const { name, title } = action;
      return {
        ...person,
        // mentors: [...person.mentors, { name: name, title: title }],
        mentors: [{ name: name, title: title }, ...person.mentors],
      };
    }

    case "deleted": {
      const { del } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== del),
      };
    }

    default: {
      throw Error(`알수없는 액션타입이다 : ${action.type}`);
    }
  }
}
