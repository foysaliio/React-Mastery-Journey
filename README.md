<div align="center">

# React Mastery Journey

### Building a strong React engineering foundation from first principles to production architecture

A structured, hands-on journey through modern React where I focused not only on learning APIs, but on understanding **rendering, state ownership, component design, server state, forms, performance, testing, accessibility, and scalable application architecture**.

<br />

<img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />

<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />

<img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />

<br />
<br />

<img src="https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack Query" />

<img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />

<img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />

<br />
<br />

<img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest" />

<img src="https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white" alt="Testing Library" />

</div>

<br />

---

## The Purpose

I built this repository to develop a deep and transferable understanding of React.

The goal was never to memorize hooks or collect isolated examples.

I wanted to understand:

- Why React renders the way it does
- Where state should live
- When state should be local, shared, derived, or remote
- How components should communicate
- How effects synchronize React with external systems
- How server data differs from client state
- How forms, validation, mutations, and caching fit together
- How production React applications should be structured
- How performance should be measured before it is optimized
- How reliable UI should handle loading, failure, empty data, accessibility, and testing

This repository captures that progression.

---

## Journey at a Glance

<table>
<tr>
<td align="center"><strong>11</strong><br />Structured Modules</td>
<td align="center"><strong>React 19</strong><br />Modern React</td>
<td align="center"><strong>TypeScript</strong><br />Type Safe Development</td>
<td align="center"><strong>Production</strong><br />Architecture Mindset</td>
</tr>
</table>

```text
Foundation
    ↓
Components & Composition
    ↓
State & Rendering
    ↓
Forms & State Architecture
    ↓
Effects & Synchronization
    ↓
Refs & Escape Hatches
    ↓
Reducer & Context
    ↓
Custom Hooks & Component Patterns
    ↓
Server State & Forms
    ↓
Performance & Testing
    ↓
Production React Architecture
```

---

# Learning Roadmap

## 01 · React Foundation & JSX

The journey started by building the mental model behind React itself.

**Core focus**

- JSX and rendering
- Components
- Expressions in JSX
- Component structure
- React application fundamentals

**Outcome**

I learned to think of React UI as a function of application state rather than a collection of manually manipulated DOM elements.

---

## 02 · Components, Props & Composition

This phase focused on designing UI through reusable component boundaries.

**Core focus**

- Props
- Type safe component APIs
- Children
- Composition
- Reusable UI patterns
- Component responsibility

**Outcome**

I moved from simply creating components to thinking about how components should expose APIs and collaborate with each other.

---

## 03 · State, Events & Interactive UI

This module introduced React's state driven interaction model.

**Core focus**

- `useState`
- Event handling
- Functional updates
- Controlled interactions
- Interactive UI patterns

**Outcome**

I developed a clear understanding of how user actions trigger state transitions and how state drives the interface.

---

## 04 · Rendering, Lists & State Mental Model

This was one of the most important foundations in the journey.

**Core focus**

- Conditional rendering
- Lists and keys
- State snapshots
- Batching
- Immutable updates
- Derived state
- State ownership
- Single source of truth

**Outcome**

I learned that correct state design is more important than simply knowing how to call `useState`.

---

## 05 · Forms & State Architecture

Forms became the practical environment for understanding state relationships.

**Core focus**

- Controlled forms
- Input handling
- Form state
- Validation fundamentals
- Lifting state
- State sharing
- State shape
- State ownership

**Outcome**

I became more deliberate about deciding where state belongs and which component should own it.

---

## 06 · Effects & Synchronization

This module changed how I think about `useEffect`.

**Core focus**

- `useEffect`
- Dependency management
- Cleanup
- Synchronization
- External systems
- Fetching fundamentals
- Avoiding unnecessary effects

**Outcome**

I stopped treating Effects as a general purpose tool and started treating them as a synchronization mechanism.

---

## 07 · Refs, DOM & Escape Hatches

This phase explored the places where React needs controlled access outside its normal declarative model.

**Core focus**

- `useRef`
- Ref vs state
- DOM references
- Focus management
- Scrolling
- Mutable refs
- Ref as a prop
- Imperative handles
- `useLayoutEffect`
- Portals
- `useId`

**Outcome**

I learned when React's declarative model is enough and when an escape hatch is justified.

---

## 08 · Reducer, Context & Complex State

Here the focus moved toward larger state systems.

**Core focus**

- `useReducer`
- Reducer functions
- Actions
- Discriminated unions
- State machine thinking
- Context
- Context providers
- Reducer with Context
- Global state decisions

**Outcome**

I learned to model state transitions intentionally rather than accumulating unrelated boolean states.

---

## 09 · Custom Hooks & Component Patterns

This module focused heavily on reusable behavior and component API design.

**Core focus**

- Custom Hooks
- Rules of Hooks
- Generic TypeScript hooks
- `useLocalStorage`
- `useDebounce`
- Fetching abstractions
- Composition over configuration
- Controlled components
- Compound components
- Headless component thinking
- Avoiding over abstraction

**Outcome**

I learned that good abstraction should emerge from repeated problems rather than being created prematurely.

---

## 10 · Data Fetching, Forms & Server State

This phase connected React to real application data flows.

**Core focus**

- Client data fetching
- Async UI states
- Service layer architecture
- Request lifecycle
- `AbortController`
- Race condition awareness
- Mutations
- Optimistic UI
- Client state vs server state
- TanStack Query
- Query keys
- Cache management
- Query invalidation
- React Hook Form
- Zod validation

**Outcome**

I developed a clear separation between client owned state and remotely owned server state.

---

## 11 · Performance, Testing & Production React

The final module brought the previous concepts together from a production engineering perspective.

**Core focus**

- Re rendering
- Render and commit phases
- `React.memo`
- `useMemo`
- `useCallback`
- `useTransition`
- `useDeferredValue`
- Concurrent UI
- Lazy loading
- Suspense
- Code splitting
- `useActionState`
- `useOptimistic`
- React Compiler mental model
- Error Boundaries
- Accessibility
- Production UI states
- Vitest
- React Testing Library
- Feature based architecture
- React DevTools
- React to Next.js transition

**Outcome**

I finished the journey thinking less about individual APIs and more about system boundaries, user experience, maintainability, and engineering tradeoffs.

---

# Core Engineering Mental Models

## State Ownership

```text
Application State
│
├── Local UI State
│   └── useState
│
├── Complex Local State
│   └── useReducer
│
├── Nearby Shared State
│   └── Lift State
│
├── Tree Wide State
│   └── Context
│
├── Complex Shared State
│   └── Context + Reducer
│
├── Reusable Stateful Logic
│   └── Custom Hooks
│
└── Server State
    └── TanStack Query
```

The most important lesson was simple:

> State should live as close as possible to the place that actually owns it.

---

## Server State

```text
Remote Server
     ↓
Query Function
     ↓
TanStack Query
     ↓
Query Cache
     ↓
React Interface

Mutation
     ↓
Remote Data Changes
     ↓
Cache Update / Invalidation
     ↓
Synchronization
     ↓
Fresh Interface
```

Server state introduced a different class of problems:

- Caching
- Freshness
- Refetching
- Mutation
- Synchronization
- Optimistic updates
- Request lifecycle

This is why server state should not automatically be treated like normal local React state.

---

## Form Architecture

```text
User Input
     ↓
React Hook Form
     ↓
Zod Validation
     ↓
Type Safe Data
     ↓
TanStack Query Mutation
     ↓
API
     ↓
Cache Synchronization
     ↓
Updated UI
```

This architecture helped connect form state, validation, asynchronous mutations, server state, and interface feedback into one predictable flow.

---

# Production Architecture

The final stage of the repository moved toward feature oriented organization.

```text
src/
│
├── components/
│   └── Shared UI
│
├── features/
│   │
│   ├── users/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   └── feature logic
│   │
│   ├── auth/
│   ├── products/
│   └── other features/
│
├── test/
│
├── App.tsx
└── main.tsx
```

### Architecture Principles

- Keep feature specific code close to its feature
- Keep state close to its owner
- Prefer local state before reaching for global state
- Separate server state from client state
- Build components around meaningful responsibilities
- Avoid premature abstractions
- Avoid unnecessary Effects
- Handle failure states deliberately
- Optimize after measuring
- Prefer maintainability over cleverness

---

# Rendering & Performance

One of the most important ideas from this journey was that:

> A re render is not automatically a performance problem.

My performance process became:

```text
Understand
    ↓
Measure
    ↓
Identify Expensive Work
    ↓
Optimize
```

Only after identifying a real problem should tools such as these become relevant:

| Tool               | Purpose                                                       |
| ------------------ | ------------------------------------------------------------- |
| `React.memo`       | Skip selected component renders when props remain stable      |
| `useMemo`          | Reuse expensive computed values                               |
| `useCallback`      | Preserve function references when reference stability matters |
| `useTransition`    | Mark selected updates as non urgent                           |
| `useDeferredValue` | Allow expensive derived UI to lag behind urgent input         |
| `lazy`             | Load code only when required                                  |
| `Suspense`         | Coordinate fallback UI while work is pending                  |
| React DevTools     | Inspect components, state, props, and rendering behavior      |

---

# Reliability & User Experience

A production interface is more than its successful state.

```text
Feature
│
├── Loading
├── Error
├── Empty
├── Success
├── Pending
└── Unexpected Failure
```

Throughout the journey I practiced designing these states intentionally rather than treating them as edge cases.

Accessibility was approached the same way.

Semantic HTML, keyboard friendly controls, clear labels, focus behavior, status messages, and meaningful error feedback are part of application quality rather than optional polish.

---

# Testing Philosophy

Testing focused on behavior rather than internal implementation.

```text
Arrange
    ↓
Render

Act
    ↓
Interact Like a User

Assert
    ↓
Verify Visible Behavior
```

### Testing Stack

| Responsibility    | Tool                  |
| ----------------- | --------------------- |
| Test runner       | Vitest                |
| DOM environment   | jsdom                 |
| Component testing | React Testing Library |
| User interaction  | `userEvent`           |
| DOM assertions    | jest dom              |

The guiding question was:

> Can a user perform the intended action and observe the correct result?

---

# Development Philosophy

Throughout the journey I followed a consistent cycle:

```text
Learn
  ↓
Implement
  ↓
Break
  ↓
Debug
  ↓
Refactor
  ↓
Document
  ↓
Commit
```

Each module was treated as part of a larger engineering progression rather than an isolated tutorial exercise.

That process helped strengthen not only React knowledge, but also debugging habits, code organization, Git discipline, and architectural thinking.

---

# React → Next.js

React established the frontend engineering foundation.

Next.js extends that foundation into a larger application architecture.

<table>
<tr>
<th>React Foundation</th>
<th>Next.js Direction</th>
</tr>

<tr>
<td>Components</td>
<td>Server and Client Components</td>
</tr>

<tr>
<td>Composition</td>
<td>Layouts and Route Composition</td>
</tr>

<tr>
<td>Client Fetching</td>
<td>Server First Data Fetching</td>
</tr>

<tr>
<td>Forms</td>
<td>Server Actions</td>
</tr>

<tr>
<td>Suspense</td>
<td>Streaming and Loading Boundaries</td>
</tr>

<tr>
<td>Server State</td>
<td>Caching and Revalidation</td>
</tr>

<tr>
<td>Feature Architecture</td>
<td>Full Stack Application Architecture</td>
</tr>
</table>

The next stage of the journey is focused on connecting these React foundations with routing, server rendering, backend APIs, authentication, databases, caching, and production full stack architecture.

---

# Repository Status

```text
React Fundamentals              ✓ Complete
Component Architecture          ✓ Complete
State Management                ✓ Complete
Effects & Synchronization       ✓ Complete
Refs & Escape Hatches           ✓ Complete
Reducers & Context              ✓ Complete
Custom Hooks                    ✓ Complete
Server State                    ✓ Complete
Forms & Validation              ✓ Complete
Performance                     ✓ Complete
Accessibility                   ✓ Complete
Testing                         ✓ Complete
Production Architecture         ✓ Complete

React Mastery Journey           ✓ COMPLETE
```

---

# Final Reflection

This repository started with JSX and basic components.

It finished with questions like:

**Who should own this state?**

**Is this client state or server state?**

**Does this logic belong in a component, hook, service, or feature?**

**Is an Effect actually necessary?**

**Is this abstraction solving a real problem?**

**Is this render expensive enough to optimize?**

**What happens when the request fails?**

**Can the interface be used accessibly?**

**Can the behavior be tested from a user's perspective?**

Those questions represent the biggest outcome of this journey.

I did not want to finish React knowing only how to write React code.

I wanted to finish React with a better understanding of how to **reason about React applications**.

<div align="center">

<br />

### React Mastery Journey

**Built through practice. Sharpened through repetition. Ready for what comes next.**

<br />

`Next → Next.js Mastery Journey`

</div>
