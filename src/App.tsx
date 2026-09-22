import { useReducer } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type State = {
  name: string;
  email: string;
  status: Status;
  error: string | null;
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
    }
  | {
      type: "RESET";
    };

const initialState: State = {
  name: "",
  email: "",
  status: "idle",
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FIELD_UPDATED":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        status: "idle",
        error: null,
      };

    case "SUBMIT_STARTED":
      return {
        ...state,
        status: "submitting",
        error: null,
      };

    case "SUBMIT_SUCCEEDED":
      return {
        ...state,
        name: "",
        email: "",
        status: "success",
        error: null,
      };

    case "SUBMIT_FAILED":
      return {
        ...state,
        status: "error",
        error: action.payload.message,
      };

    case "RESET":
      return initialState;

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

  const isSubmitting = state.status === "submitting";

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">State Machine Mindset</h1>

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
          disabled={isSubmitting}
          className="rounded bg-black px-5 py-3 text-white
            disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {state.status === "error" && state.error && (
          <p className="text-red-600">{state.error}</p>
        )}

        {state.status === "success" && (
          <div className="space-y-3">
            <p className="text-green-600">Submitted successfully.</p>

            <button
              onClick={() =>
                dispatch({
                  type: "RESET",
                })
              }
              className="rounded border px-4 py-2"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
