import { useReducer } from "react";

type State = {
  name: string;
  email: string;
  isSubmitting: boolean;
  error: string | null;
  isSuccess: boolean;
};

type Action =
  | {
      type: "FIELD_UPDATED";
      payload: {
        field: "name" | "email";
        value: string;
      };
    }
  | {
      type: "SUBMIT_STARTED";
    }
  | {
      type: "SUBMIT_SUCCEEDED";
    }
  | {
      type: "SUBMIT_FAILED";
      payload: {
        message: string;
      };
    };

const initialState: State = {
  name: "",
  email: "",
  isSubmitting: false,
  error: null,
  isSuccess: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FIELD_UPDATED":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        isSuccess: false,
      };

    case "SUBMIT_STARTED":
      return {
        ...state,
        isSubmitting: true,
        error: null,
        isSuccess: false,
      };

    case "SUBMIT_SUCCEEDED":
      return {
        ...state,
        name: "",
        email: "",
        isSubmitting: false,
        error: null,
        isSuccess: true,
      };

    case "SUBMIT_FAILED":
      return {
        ...state,
        isSubmitting: false,
        error: action.payload.message,
        isSuccess: false,
      };

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleSubmit() {
    dispatch({
      type: "SUBMIT_STARTED",
    });

    try {
      if (!state.name || !state.email) {
        throw new Error("Name and email are required.");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch({
        type: "SUBMIT_SUCCEEDED",
      });
    } catch (error) {
      dispatch({
        type: "SUBMIT_FAILED",
        payload: {
          message:
            error instanceof Error ? error.message : "Something went wrong.",
        },
      });
    }
  }

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Reducer Actions</h1>

      <div className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(event) =>
            dispatch({
              type: "FIELD_UPDATED",
              payload: {
                field: "name",
                value: event.target.value,
              },
            })
          }
          className="w-full rounded border p-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(event) =>
            dispatch({
              type: "FIELD_UPDATED",
              payload: {
                field: "email",
                value: event.target.value,
              },
            })
          }
          className="w-full rounded border p-3"
        />

        <button
          onClick={handleSubmit}
          disabled={state.isSubmitting}
          className="rounded bg-black px-5 py-3 text-white
            disabled:opacity-50"
        >
          {state.isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {state.error && <p className="text-red-600">{state.error}</p>}

        {state.isSuccess && (
          <p className="text-green-600">Submitted successfully.</p>
        )}
      </div>
    </main>
  );
}
