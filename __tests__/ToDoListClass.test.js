import React from 'react';
import renderer from 'react-test-renderer';
import ToDoListClass from '../components/ToDoList/ToDoListClassFunc';

test('renders correctly', () => {
  const tree = renderer.create(<ToDoListClass />).toJSON();
  expect(tree).toMatchSnapshot();
});

// // ToDoListClass.test.tsx
// import React from 'react';
// import {render, fireEvent} from '@testing-library/react-native';
// import ToDoListClass from './ToDoListClass';

// describe('ToDoListClass Component', () => {
//   it('should render the input and button correctly', () => {
//     const {getByPlaceholderText, getByText} = render(<ToDoListClass />);

//     expect(getByPlaceholderText('Please type Your Task Name')).toBeTruthy();
//     expect(getByText('Add Task')).toBeTruthy();
//   });

//   it('should add a new task when the Add Task button is pressed', () => {
//     const {getByPlaceholderText, getByText, getByTestId} = render(
//       <ToDoListClass />,
//     );

//     const input = getByPlaceholderText('Please type Your Task Name');
//     const button = getByText('Add Task');

//     // Simulate user typing in the TextInput
//     fireEvent.changeText(input, 'New Task');

//     // Simulate button press
//     fireEvent.press(button);

//     // Check if the new task is added to the list
//     expect(getByText('New Task')).toBeTruthy();
//   });

//   it('should delete a task when the Delete button is pressed', () => {
//     const {getByText, getAllByText} = render(<ToDoListClass />);

//     // Find the Delete button for the first task and press it
//     const deleteButton = getAllByText('Delete')[0];
//     fireEvent.press(deleteButton);

//     // Ensure the task is removed from the list
//     expect(getByText('work')).not.toBeTruthy();
//   });

//   it('should toggle task completion when the Complete/Undo button is pressed', () => {
//     const {getByText, getAllByText} = render(<ToDoListClass />);

//     // Find the Complete button for the first task and press it
//     const completeButton = getAllByText('Complete')[0];
//     fireEvent.press(completeButton);

//     // Check if the task is marked as completed
//     const task = getByText('work');
//     expect(task.props.style).toContainEqual(
//       expect.objectContaining({textDecorationLine: 'line-through'}),
//     );
//   });
// });
