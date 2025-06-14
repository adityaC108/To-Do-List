# Testing Guidance

This document provides comprehensive testing instructions for the To-Do List React application.

##  Manual Testing Checklist

**1. Adding Tasks**

   - Valid Task Addition: Enter a task and click "Add" button

     - Expected: Task appears at the top of the list

   - Keyboard Support: Enter a task and press Enter key

     - Expected: Task is added without clicking the button

   - Empty Input Validation: Try to add an empty task

     - Expected: Error message "Please enter a task!" appears

   - Whitespace Validation: Try to add a task with only spaces

     - Expected: Error message appears, task is not added

   - Duplicate Task Prevention: Try to add the same task twice

     - Expected: Error message "This task already exists!" appears

   - Case Insensitive Duplicates: Add "Test" then try "test"

     - Expected: Duplicate error message appears

   - Error Clearing: Start typing after an error appears

     - Expected: Error message disappears when you start typing

**2. Task Management**

   - Mark as Complete: Click the circle next to an active task

     - Expected: Circle turns green with checkmark, text gets strikethrough, background becomes light green


   - Mark as Incomplete: Click the green circle next to a completed task

     - Expected: Circle becomes empty, strikethrough removed, background becomes white

   - Delete Task: Click the "×" button on any task

     - Expected: Task is removed from the list immediately

   - Task Date Display: Check if creation date appears for each task

     - Expected: Date is displayed in MM/DD/YYYY format

**3. Filtering Functionality**

   - All Tasks Filter: Select "All Tasks" from filter dropdown

     - Expected: All tasks (active and completed) are visible

   - Active Tasks Filter: Select "Active" from filter dropdown

     - Expected: Only incomplete tasks are shown

   - Completed Tasks Filter: Select "Completed" from filter dropdown

     - Expected: Only completed tasks are shown

   - Filter with Empty Results: Select a filter with no matching tasks

     - Expected: Appropriate empty state message appears with relevant emoji

**4. Sorting Functionality**

   - Newest First: Select "Newest First" from sort dropdown

     - Expected: Most recently added tasks appear at the top

   - Oldest First: Select "Oldest First" from sort dropdown

     - Expected: Oldest tasks appear at the top

   - Alphabetical Sort: Select "A-Z" from sort dropdown

     - Expected: Tasks are sorted alphabetically by task text

**5. Combined Filter and Sort**

   - Filter + Sort: Apply both a filter and sort option

     - Expected: Tasks are first filtered, then sorted according to selection

   - Dynamic Updates: Add a new task while filter/sort is active

     - Expected: New task appears in correct position based on current filter/sort

**6. User Interface Testing**

   - Responsive Design: Test on different screen sizes

     - Expected: Layout adapts properly, no horizontal scrolling

   - Button Hover Effects: Hover over Add and Remove buttons

     - Expected: Background color changes on hover

   - Input Focus: Click on the input field

     - Expected: Input field gets focus, border color may change

   - Empty State Messages: Remove all tasks or use filters with no results

     - Expected: Appropriate empty state message with emoji appears

## Edge Cases to Test

**1. Input Validation Edge Cases**

   - Very long task names (100+ characters)
   - Task names with special characters (!@#$%^&*)
   - Task names with only numbers
   - Task names with emojis
   - Copy-paste very long text

**2. UI Edge Cases**

   - Rapidly clicking Add button multiple times
   - Rapidly toggling task completion
   - Switching filters/sorts rapidly
   - Adding many tasks (20+) to test scrolling

**3. Browser Compatibility**

   - Test in Chrome
   - Test in Firefox
   - Test in Safari
   - Test in Edge
