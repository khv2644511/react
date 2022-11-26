import React, { useReducer, useState } from "react";

export default function AppMentors() {
  // const [person, setPerson] = useState(initialValue);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    console.log("jd");
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  };

  const handleAdd = () => {
    const name = prompt(`멘토 이름은?`);
    const title = prompt(`멘토 직함은?`);
    setPerson((person) => ({
      ...person,
      // mentors: [...person.mentors, { name: name, title: title }],
      mentors: [{ name: name, title: title }, ...person.mentors],
    }));
  };

  const handleDelete = () => {
    {
      const del = prompt(`삭제할 이름을 작성해주세요`);
      setPerson((person) => ({
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== del),
      }));
    }
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기zzzzzs</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토의 삭제하기</button>
    </div>
  );
}

const initialValue = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
