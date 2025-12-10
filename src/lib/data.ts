import type { Note } from '@/lib/definitions';

// In-memory store acting as a local database
let notes: Note[] = [
  {
    id: '1',
    college: 'St. Joseph\'s College',
    subject: 'Advanced Calculus',
    professor: 'Dr. Evelyn Reed',
    uploader: 'stjosephs',
    uploadDate: '2023-10-26T10:00:00Z',
    content: `An introduction to Advanced Calculus, focusing on limits and continuity.

Limits are foundational to calculus and analysis. Informally, a limit is the value that a function or sequence "approaches" as the input or index approaches some value. The formal definition, known as the epsilon-delta definition, is more precise. For a function f(x), we say the limit of f(x) as x approaches c is L if for every ε > 0, there exists a δ > 0 such that for all x, if 0 < |x - c| < δ, then |f(x) - L| < ε. This means we can make f(x) as close to L as we want by making x sufficiently close to c.

Properties of Limits:
1.  Sum Rule: lim (f(x) + g(x)) = lim f(x) + lim g(x)
2.  Product Rule: lim (f(x) * g(x)) = lim f(x) * lim g(x)
3.  Quotient Rule: lim (f(x) / g(x)) = lim f(x) / lim g(x), provided lim g(x) ≠ 0.
4.  Squeeze Theorem: If f(x) ≤ g(x) ≤ h(x) for all x in an open interval containing c, and lim f(x) = lim h(x) = L, then lim g(x) = L.

Continuity is another central concept. A function is continuous at a point c if three conditions are met:
1.  f(c) is defined.
2.  The limit of f(x) as x approaches c exists.
3.  The limit of f(x) as x approaches c is equal to f(c).

If a function is not continuous at a point, it has a discontinuity. Types of discontinuities include:
-   Removable Discontinuity: The limit exists but is not equal to f(c), or f(c) is not defined. The "hole" can be "filled" to make the function continuous.
-   Jump Discontinuity: The function "jumps" from one value to another. The left-hand limit and right-hand limit both exist but are not equal.
-   Infinite Discontinuity: The function approaches infinity or negative infinity as x approaches c.

Important theorems related to continuous functions:
-   Intermediate Value Theorem (IVT): If a function f is continuous on a closed interval [a, b], then for any value N between f(a) and f(b), there exists at least one number c in (a, b) such that f(c) = N.
-   Extreme Value Theorem (EVT): If a function f is continuous on a closed interval [a, b], then f must attain both a maximum and a minimum value on that interval. This guarantees the existence of absolute extrema for any continuous function over a closed interval.`,
  },
  {
    id: '2',
    college: 'IIT Madras',
    subject: 'Quantum Mechanics',
    professor: 'Dr. Arjun Varma',
    uploader: 'iitm',
    uploadDate: '2023-10-25T14:30:00Z',
    content: `This lecture covers the basics of Quantum Mechanics, including wave-particle duality and the Schrödinger equation.

Quantum mechanics is the fundamental theory in physics which describes nature at the smallest scales of energy levels of atoms and subatomic particles. One of its most counter-intuitive concepts is wave-particle duality. This principle posits that all particles exhibit both wave and particle properties. A central piece of evidence for this is the double-slit experiment. When particles like electrons are fired at a screen with two slits, they create an interference pattern on a detector behind it—a hallmark of wave behavior—even when sent one particle at a time. This suggests that each particle passes through both slits simultaneously as a wave of probability.

The state of a quantum mechanical system is described by a wave function, denoted by the Greek letter Psi (Ψ). The wave function itself is a complex-valued probability amplitude, and the square of its absolute value, |Ψ|², gives the probability density of finding the particle at a given point in space at a given time.

The evolution of the wave function over time is governed by the Schrödinger equation. The time-dependent Schrödinger equation is given by:
iħ(∂Ψ/∂t) = HΨ
where 'i' is the imaginary unit, 'ħ' is the reduced Planck constant, '∂Ψ/∂t' is the partial derivative of the wave function with respect to time, and 'H' is the Hamiltonian operator. The Hamiltonian represents the total energy of the system (kinetic + potential).

For systems where the potential energy does not change with time, we can use the time-independent Schrödinger equation:
HΨ = EΨ
This is an eigenvalue equation, where 'E' is a constant representing the total energy of the system, and Ψ is the corresponding energy eigenstate or stationary state. The solutions to this equation give the allowed quantized energy levels of the system.

The probabilistic nature of quantum mechanics is one of its key departures from classical physics. We cannot know both the exact position and the exact momentum of a particle simultaneously. This is formalized by the Heisenberg Uncertainty Principle:
Δx * Δp ≥ ħ/2
where Δx is the uncertainty in position and Δp is the uncertainty in momentum. This principle is not a statement about the limitations of our measurement devices; it is an inherent property of the quantum world. The more precisely you know one quantity, the less precisely you know the other. This fundamental limit has profound implications for our understanding of reality.`,
  },
  {
    id: '3',
    college: 'Saveetha University',
    subject: 'Data Structures',
    professor: 'Prof. Meena Kumari',
    uploader: 'saveetha',
    uploadDate: '2023-10-24T09:15:00Z',
    content: `An overview of fundamental data structures. Data structures are a way of organizing and storing data so that they can be accessed and worked with efficiently.

1.  Arrays:
An array is a collection of items of the same data type stored at contiguous memory locations. This allows for constant-time access to an element at a specific index.
-   Operations: Access (O(1)), Search (O(n)), Insertion (O(n)), Deletion (O(n)).
-   Advantages: Fast random access.
-   Disadvantages: Fixed size, costly insertions and deletions.

2.  Linked Lists:
A linked list is a linear collection of data elements (nodes) whose order is not given by their physical placement in memory. Each node points to the next node in the sequence.
-   Types: Singly Linked List, Doubly Linked List, Circular Linked List.
-   Operations: Access/Search (O(n)), Insertion/Deletion (O(1) if at the head, otherwise O(n) to find the node).
-   Advantages: Dynamic size, efficient insertions and deletions at the beginning or end.
-   Disadvantages: Slow random access (requires traversal).

3.  Stacks:
A stack is a linear data structure that follows a Last-In, First-Out (LIFO) principle. Think of it like a stack of plates.
-   Primary Operations: push (add an item to the top), pop (remove the top item), peek (look at the top item). All are O(1).
-   Applications: Function call management (call stack), undo/redo functionality, parsing expressions.

4.  Queues:
A queue is a linear structure that follows a First-In, First-Out (FIFO) principle. Like a checkout line at a store.
-   Primary Operations: enqueue (add an item to the back), dequeue (remove the front item), front (look at the front item). All are O(1).
-   Applications: Task scheduling, print job management, breadth-first search in graphs.

5.  Trees:
A tree is a hierarchical data structure consisting of nodes connected by edges. Each tree has a root node, and the root has zero or more child nodes.
-   Binary Search Tree (BST): A specific type of binary tree where for each node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater. This allows for efficient searching, insertion, and deletion (average O(log n)).
-   Applications: File systems, databases (indexing), family trees.

6.  Hash Tables:
A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
-   Operations: Average case for Search, Insertion, and Deletion is O(1). Worst case is O(n) if many collisions occur.
-   Applications: Caches, database indexing, symbol tables in compilers.`,
  },
  {
    id: '4',
    college: 'IIT Madras',
    subject: 'Advanced Calculus',
    professor: 'Dr. Priya Sharma',
    uploader: 'iitm',
    uploadDate: '2023-10-23T16:45:00Z',
    content: `This note covers differentiation and integration in multiple dimensions, extending single-variable calculus concepts to functions of several variables.

Partial Derivatives:
When dealing with a function of several variables, like f(x, y), we can differentiate with respect to one variable while holding the others constant. This is called a partial derivative.
-   The partial derivative of f with respect to x is denoted as ∂f/∂x.
-   The partial derivative of f with respect to y is denoted as ∂f/∂y.
For example, if f(x, y) = x²y + y³, then ∂f/∂x = 2xy and ∂f/∂y = x² + 3y².

The Gradient:
The gradient of a scalar function f(x, y, z) is a vector field, denoted by ∇f. It packages all the partial derivative information into one vector:
∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)
The gradient vector points in the direction of the greatest rate of increase of the function, and its magnitude is the rate of increase in that direction. It is crucial in optimization, as the gradient is zero at local extrema.

Multiple Integrals:
Just as a single integral of a positive function of one variable represents the area under the curve, a double integral of a positive function of two variables represents the volume under the surface z = f(x, y).
-   Double Integral: ∫∫_R f(x, y) dA
-   Triple Integral: ∫∫∫_E f(x, y, z) dV
These are typically evaluated as iterated integrals. For example, a double integral over a rectangular region R = [a, b] x [c, d] can be computed as:
∫[c to d] (∫[a to b] f(x, y) dx) dy

Fubini's Theorem states that if f(x, y) is continuous on the rectangle R, then the order of integration does not matter.

Line Integrals and Surface Integrals:
Calculus in multiple dimensions also includes integrating over curves and surfaces.
-   Line Integral: Integrates a function along a curve. It can be used to find the mass of a wire with variable density or the work done by a force field along a path.
-   Surface Integral: Integrates a function over a surface. It can be used to calculate the flux of a vector field across a surface, representing the amount of "stuff" flowing through it.

Fundamental Theorems of Vector Calculus:
These theorems relate integrals over a region to integrals over the boundary of that region, generalizing the Fundamental Theorem of Calculus.
-   Green's Theorem: Relates a line integral around a simple closed curve C to a double integral over the plane region D bounded by C.
-   Stokes' Theorem: Relates the surface integral of the curl of a vector field over a surface Σ to the line integral of the vector field over its boundary curve ∂Σ.
-   Divergence Theorem: Relates the flux of a vector field through a closed surface S to the triple integral of the divergence of the field over the volume E enclosed by the surface.`,
  },
  {
    id: '5',
    college: 'St. Joseph\'s College',
    subject: 'Literary Theory',
    professor: 'Dr. Samuel Chen',
    uploader: 'stjosephs',
    uploadDate: '2023-10-22T11:00:00Z',
    content: `An introduction to major schools of literary theory, which are frameworks or perspectives for analyzing and interpreting literature.

1.  Formalism and New Criticism:
These schools, popular in the early 20th century, focus on the literary text itself, independent of its author's biography, historical context, or effect on the reader. Formalists analyze the "form" of the work—its structure, grammar, syntax, and literary devices like meter, rhyme, and metaphor. The goal is to understand how these elements work together to create the text's meaning. New Criticism, a related American movement, emphasizes "close reading" to uncover how a text's formal elements create ambiguity, irony, and paradox to resolve into a complex, unified whole.
-   Key Concepts: Close reading, form, unity, ambiguity, irony, paradox.
-   Key Question: How do the formal elements of this text create a unified meaning?

2.  Structuralism and Post-structuralism:
Structuralism, which emerged in the mid-20th century, relates literary texts to a larger structure, such as a particular genre, a system of intertextual connections, or a model of universal narrative structure. It argues that meaning is not inherent in the text but is produced by the system of conventions and codes that we use to understand it. For example, a structuralist might analyze a fairy tale by identifying its underlying binary oppositions (e.g., good vs. evil, nature vs. culture).

Post-structuralism, emerging in the 1960s, is a reaction against Structuralism's claim to scientific objectivity. Thinkers like Jacques Derrida argued that because language is a system of endless deferral (words are defined by other words), there can be no stable, single meaning. Deconstruction, a key post-structuralist practice, involves taking apart a text to show how it undermines its own claims to have a single, logical meaning. It exposes the text's internal contradictions and the instability of language itself.
-   Key Concepts: (Structuralism) Sign, signifier, signified, binary opposition; (Post-structuralism) Deconstruction, deferral, undecidability.
-   Key Question: (Post-structuralism) How does the text's language contradict or undermine its apparent meaning?

3.  Psychoanalytic Criticism:
This approach applies the theories of Sigmund Freud and his successors (like Jacques Lacan) to literature. It analyzes texts to understand the unconscious motivations and desires of the author or the characters. This can involve looking for Freudian symbols (phallic symbols, dream imagery) or analyzing character relationships through the lens of concepts like the Oedipus complex, repression, and the unconscious.
-   Key Concepts: Unconscious, repression, Oedipus complex, id/ego/superego, dream symbolism.
-   Key Question: What are the unconscious motives of the characters or the author as revealed in the text?

4.  Marxist Criticism:
Based on the theories of Karl Marx, this school of criticism views literature as a product of the economic and social conditions in which it was created. A Marxist critic analyzes the role of class, ideology, and power in a text. They might examine how a text represents class conflict, how it supports or challenges the dominant capitalist ideology, or how it reflects the economic realities of its time.
-   Key Concepts: Class, ideology, base and superstructure, capitalism, alienation.
-   Key Question: How does this text reflect or resist the dominant ideology of its time?`,
  },
];

// The server actions that use these functions are revalidated, so we don't need to worry about caching.
export const getNotes = async (): Promise<Note[]> => {
  // In a real app, you'd fetch this from a database.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(notes);
    }, 500); // Simulate network delay
  });
};

export const addNote = async (note: Omit<Note, 'id' | 'uploadDate' | 'content'>): Promise<Note> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newNote: Note = {
        ...note,
        id: (notes.length + 1).toString(),
        uploadDate: new Date().toISOString(),
        // In a real app, you would handle file upload and get content.
        content: 'This is a newly uploaded note. The content would appear here.',
      };
      notes.unshift(newNote);
      resolve(newNote);
    }, 500);
  });
};
