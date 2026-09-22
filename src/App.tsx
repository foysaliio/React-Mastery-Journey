import { useReducer } from "react";

interface State {
  name: string;
  email: string;
  isSubmitting: boolean;
  error: string | null;
  isSuccess: boolean;
}

type Action =
  | {
      type: "UPDATE_FIELD";
      field: "name" | "email";
      value: string;
    }
  | {
      type: "SUBMIT_STARTED";
    }
  | {
      type: "SUBMIT_SUCCESS";
    }
  | {
      type: "SUBMIT_FAILED";
      message: string;
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
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        isSuccess: false,
      };

    case "SUBMIT_STARTED":
      return {
        ...state,
        isSubmitting: true,
        error: null,
        isSuccess: false,
      };

    case "SUBMIT_SUCCESS":
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
        error: action.message,
        isSuccess: false,
      };

    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async () => {
    dispatch({
      type: "SUBMIT_STARTED",
    });

    try {
      if (!state.name || !state.email) {
        throw new Error("Name and email are required.");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch({
        type: "SUBMIT_SUCCESS",
      });
    } catch (error) {
      dispatch({
        type: "SUBMIT_FAILED",
        message:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    }
  };

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Reducer Function</h1>

      <div className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(event) =>
            dispatch({
              type: "UPDATE_FIELD",
              field: "name",
              value: event.target.value,
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
              type: "UPDATE_FIELD",
              field: "email",
              value: event.target.value,
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
};

export default App;
