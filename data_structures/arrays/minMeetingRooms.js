/*
TIME AND SPACE COMPLEXITY
    Time = O(nlogn) , Space = O(n)
    The time complexity of this solution is O(n log n), where n is the number of intervals. This is because we are performing two separate
sorts on the start and end times, which both take O(n log n) time in the worst case. We also iterate through the intervals array once,
which takes O(n) time. Therefore, the overall time complexity is O(n log n).

    The space complexity is O(n), where n is the number of intervals. This is because we are creating two separate arrays of start and end
times, each of which has length n. We are also using two integer variables to keep track of the room count and the end pointer, which takes
constant space. Therefore, the overall space complexity is O(n).
*/

// Define a function named minMeetingRooms that takes an array of meeting time intervals as input
const minMeetingRooms = intervals => {
    // If the intervals array is undefined or empty, return 0
    if (!intervals || intervals.length < 1) return 0;

    // Initialize the room count and the end pointer to 0
    let rooms = 0;
    let end = 0;

    // Extract the start and end times of each meeting into separate arrays, sort them in ascending order
    const starts = intervals.map(a => a[0]).sort((a, b) => a - b);
    const ends = intervals.map(a => a[1]).sort((a, b) => a - b);

    // Iterate through the intervals array using a for loop
    for(let i = 0; i < intervals.length; i++) {
        // If the start time of the current meeting is less than the end time of the meeting that currently has the earliest end time, increment the room count
        if(starts[i] < ends[end]) {
            rooms++;
        } else { // Otherwise, increment the end pointer to move on to the next meeting that finishes earliest
            end++;
        }
    }

    // Return the room count
    return rooms;
};
